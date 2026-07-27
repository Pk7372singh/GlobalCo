interface PageHeaderProps {
  title: string;

  description?: string;
}

export default function PageHeader({
  title,

  description,
}: PageHeaderProps) {
  return (
    <div className="mb-2">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}
