import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({ onClick, isOpen }: { onClick?: OnClick, isOpen?: boolean }) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isOpen && styles.container_open}`}
			onClick={onClick}
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isOpen && styles.arrow_open}`}
			/>
		</div>
	);
};
