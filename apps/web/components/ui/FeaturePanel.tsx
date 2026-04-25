type FeaturePanelProps = {
  title: string;
  description: string;
  actions: Array<{ label: string; href?: string }>;
};

export function FeaturePanel({ title, description, actions }: FeaturePanelProps) {
  return (
    <section className="card">
      <h1>{title}</h1>
      <p className="muted">{description}</p>
      <div className="button-row">
        {actions.map((action) =>
          action.href ? (
            <a className="pill" href={action.href} key={action.label}>
              {action.label}
            </a>
          ) : (
            <button key={action.label} className="pill pill-primary" type="button">
              {action.label}
            </button>
          )
        )}
      </div>
    </section>
  );
}
