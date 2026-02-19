import type { ProductSpec } from "@/data/products";

interface Props {
  specs: ProductSpec[];
}

const ProductSpecTable = ({ specs }: Props) => {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="text-left px-6 py-3 font-heading font-semibold text-foreground">
              Specification
            </th>
            <th className="text-left px-6 py-3 font-heading font-semibold text-foreground">
              Detail
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
