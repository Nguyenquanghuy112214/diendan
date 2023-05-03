import ReactPaginate from 'react-paginate';

import classNames from 'classnames/bind';
import styles from './Paginated.module.scss';

const cx = classNames.bind(styles);
function Paginated({ onClick, pageCount, children }) {
  return (
    <>
      <>{children}</>

      <tr style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <ReactPaginate
            breakLabel="........"
            disableInitialCallback={true}
            // initialPage={1}
            nextLabel=">>"
            onPageChange={onClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<<"
            // renderOnZeroPageCount={null}
            containerClassName={'pagination'}
            pageLinkClassName={'page-num'}
            previousClassName={'page-num'}
            nextClassName={'page-num'}
            activeLinkClassName={'active'}
          />
        </div>
      </tr>
    </>
  );
}

export default Paginated;
