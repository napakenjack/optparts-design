export const EmptyState = ({ title, action }: { title: string; action?: string }) => (
  <div className="state">
    <h3>{title}</h3>
    {action && <button className="btn btn--secondary">{action}</button>}
  </div>
);

export const ErrorState = ({ message }: { message: string }) => (
  <div className="state state--error">
    <h3>Something went wrong</h3>
    <p>{message}</p>
  </div>
);

export const LoadingState = ({ label = 'Loading data…' }: { label?: string }) => (
  <div className="state"><p>{label}</p></div>
);
