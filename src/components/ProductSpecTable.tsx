import type { ProductSpec } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  specs: ProductSpec[];
}

const ProductSpecTable = ({ specs }: Props) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="text-left px-6 py-3 font-heading font-semibold text-foreground">
              {t("Specification", "Spécification")}
            </th>
            <th className="text-left px-6 py-3 font-heading font-semibold text-foreground">
              {t("Detail", "Détail")}
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
            >
              <td className="px-6 py-3 font-medium text-foreground">
                {spec.label}
              </td>
              <td className="px-6 py-3 text-muted-foreground">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecTable;
