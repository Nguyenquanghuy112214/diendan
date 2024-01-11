import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage } from 'react-pdf/dist/esm/entry.webpack';
import { BiNavigation } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import testpdf from './test2.pdf'
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './PageFlip.module.scss';

import { forwardRef, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import Loading from '../AnimationLoading/Animationloading';

const cx = classNames.bind(styles);

const Page = forwardRef((props, ref) => {
	return (
		<div className={cx('page')} ref={ref}>
			<div className={cx('page-content')}>
				<ReactPdfPage pageNumber={props.pageNumber} loading="" />
			</div>
		</div>
	);
});

function PageFlip({ onClick, active, data }) {
	const [file, setFile] = useState(null);
	const [numPages, setNumPages] = useState(null);
	const [loading, setLoading] = useState(true);

	const [shownavigate, setShowNavigate] = useState(false);
	const [currentnumber, setNumberPage] = useState(0);
	const [numberpre, setNumberPre] = useState(0);
	const pageSlide = useRef();

	useEffect(() => {
		setFile(null);
	}, []);
	function onDocumentLoadSuccess({ numPages }) {
		if (numPages) {
			setNumPages(2);
			setInterval(() => {
				setNumPages(numPages);
			}, [1000]);
			setLoading(false);
		}
	}
	const handleFlip = (e) => {
		setNumberPage(Number(e.data));
		setNumberPre(Number(e.data));
	};
	const handlePre = () => {
		pageSlide.current.pageFlip().flipPrev();
	};

	const handNext = () => {
		pageSlide.current.pageFlip().flipNext();
	};

	const handleShowNavigate = () => {
		setShowNavigate(!shownavigate);
	};
	const handeChangeNumber = (e) => {
		setNumberPage(Number(e.target.value));
	};

	const handleNavigate = () => {
		if (numberpre === 0 && currentnumber === 1) {
			pageSlide.current.pageFlip().flipNext();
			setNumberPre(Number(currentnumber));
		}

		// Xử lý next trang start
		else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 !== 0 &&
			numberpre === 0
		) {
			for (let i = 0; i <= Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 !== 0 &&
			numberpre !== 0
		) {
			for (let i = 0; i < Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 === 0
		) {
			for (let i = 0; i < Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre === 1 &&
			currentnumber % 2 !== 0 &&
			numberpre % 2 === 0
		) {
			pageSlide.current.pageFlip().flipNext();
			setNumberPre(Number(currentnumber));
		}

		// Xử lý next trang end

		// Xử lý pre trang start
		else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			numberpre % 2 === 0 &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (let i = 0; i < Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			numberpre % 2 !== 0 &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (let i = 0; i <= Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			currentnumber !== numberpre &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (let i = 0; i <= Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			numberpre > currentnumber &&
			currentnumber !== numberpre &&
			numberpre - currentnumber > 1 &&
			(numberpre - currentnumber) % 2 === 0
		) {
			for (let i = 0; i < Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
		} else if (numberpre - currentnumber === 1 && numberpre % 2 !== 0 && currentnumber % 2 === 0) {
			pageSlide.current.pageFlip().flipPrev();
			setNumberPre(Number(currentnumber));
		}
		// Xử lý Pre trang end
	};
	return (
		<AnimatePresence>
			(
			<motion.div
				initial={{ x: 40, opacity: 0, visibility: 'hidden' }}
				animate={{
					x: active ? 0 : 40,
					opacity: active ? 1 : 0,
					visibility: active ? 'visible' : 'hidden',
				}}
				exit={{ x: 40, opacity: 0 }}
				className={cx('wrapper-modal')}
			>
				{/* <Loading active={loading} /> */}
				<span onClick={() => onClick()} className={cx('close')}>
					<IoIosClose />
				</span>
				<div className={cx('modal')}>
					<div className={cx('box-navigate', 'd-flex', shownavigate ? 'active' : '')}>
						<button
							className={cx(
								'navgate-pageflip',
								'size-navigate',
								'd-flex align-items-center',
								shownavigate ? 'active' : '',
							)}
							onClick={handleShowNavigate}
						>
							<BiNavigation />
						</button>
						<div className={cx('wrapper-handle', 'd-none')}>
							<span onClick={handlePre}>{'<<'}</span>
							<div className={cx('totalnumber-page', 'd-flex')}>
								<input
									value={currentnumber}
									onChange={(e) => handeChangeNumber(e)}
									type="number"
									placeholder="Nhập trang cần tìm..."
								/>
								<span>/</span>

								<span> {numPages}</span>
							</div>

							<span onClick={handleNavigate}>
								<FiSearch />
							</span>
							<span onClick={handNext}>{'>>'}</span>
						</div>
					</div>

					<div className={cx('bgflip', 'row justify-content-xl-center ')}>
						<div className={cx('mt-5')}>
							<Document
								onLoadError={(error) => {
									setFile(testpdf)
								}
								}
								file={
									file === null
										? `/Resourcelib/${data?.fileLessonPlan
										}`
										: file
								}
								// file={testpdf}
								onLoadSuccess={onDocumentLoadSuccess}
							// loading={<Loading />}
							>
								<HTMLFlipBook
									width={500}
									height={700}
									minWidth={315}
									maxWidth={1000}
									minHeight={420}
									maxHeight={900}
									size="stretch"
									maxShadowOpacity={0.5}
									showCover={true}
									// mobileScrollSupport={false}
									onFlip={(e) => handleFlip(e)}
									className={cx('demo-book')}
									ref={pageSlide}
								>
									{Array.from(
										Array(numPages !== null && numPages),
										(item, index) => {
											return <Page key={index} pageNumber={index + 1} />;
										},
									)}
								</HTMLFlipBook>
							</Document>
						</div>
					</div>
				</div>
			</motion.div>
			)
		</AnimatePresence>
	);
}

export default PageFlip;
