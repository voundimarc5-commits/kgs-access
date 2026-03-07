import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message, spaceType, projectContext } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a1a; color: #e0e0e0;">
        <div style="border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="color: #c0c0c0; margin: 0; font-size: 24px;">New Contact Enquiry</h1>
          <p style="color: #888; margin: 5px 0 0; font-size: 14px;">KGS Access — Contact Form Submission</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #fff;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #fff;"><a href="mailto:${email}" style="color: #87CEEB;">${email}</a></td>
          </tr>
          ${company ? `<tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Company</td>
            <td style="padding: 10px 0; color: #fff;">${company}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Space Type</td>
            <td style="padding: 10px 0; color: #fff;">${spaceType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Project Context</td>
            <td style="padding: 10px 0; color: #fff;">${projectContext || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #fff; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666;">
          Sent from access.koraglobalsystems.com contact form
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'KGS Access <contact@koraglobalsystems.com>',
        to: ['contact@koraglobalsystems.com'],
        subject: `New Enquiry from ${name} — ${spaceType || 'Contact Form'}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', data);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: data }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
