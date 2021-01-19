export const Arrow = ({ direction, clickFunction }) => (
      <i className={`fas fa-chevron-${direction}`} onClick={ clickFunction }></i>
  );