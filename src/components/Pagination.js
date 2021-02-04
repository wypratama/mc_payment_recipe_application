export default function Pagination(props) {
  const { page, setPage } = props;
  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page !== 10) {
      setPage(page + 1);
    }
  };
  return (
    <div className="pagination">
      <span
        style={{
          cursor: 'pointer',
          userSelect: page === 1 ? 'none' : 'text',
          opacity: page === 1 ? '50%' : '100%',
        }}
        onClick={prevPage}
      >
        Previous
      </span>
      <span style={{ userSelect: 'none' }}>{page}</span>
      <span
        style={{
          cursor: 'pointer',
          userSelect: page === 10 ? 'none' : 'text',
          opacity: page === 10 ? '50%' : '100%',
        }}
        onClick={nextPage}
      >
        Next
      </span>
    </div>
  );
}
