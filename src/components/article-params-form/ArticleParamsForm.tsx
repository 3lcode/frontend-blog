import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { FormEvent, useState } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Spacing } from '../spacing';
import { PageStyle } from 'src/index';

export const ArticleParamsForm = ({ updateStyle }: { updateStyle: (style: PageStyle) => void}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	}


	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);

	const onFontChange = (font: OptionType) => {
		setSelectedFont(font);
	}


	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);

	const onFontSizeChange = (fontSize: OptionType) => {
		setSelectedFontSize(fontSize);
	}

	
	const [selectedFontColor, setSelectedFontColor] = useState(fontColors[0]);

	const onFontColorChange = (fontColor: OptionType) => {
		setSelectedFontColor(fontColor);
	}


	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(backgroundColors[0]);

	const onBackgroundColorChange = (backgroundColor: OptionType) => {
		setSelectedBackgroundColor(backgroundColor);
	}


	const [selectedContentWidthArr, setSelectedContentWidthArr] = useState(contentWidthArr[0]);

	const onContentWidthArrChange = (contentWidthArr: OptionType) => {
		setSelectedContentWidthArr(contentWidthArr);
	}


	const submitHanlder = (e: FormEvent) => {
		e.preventDefault();

		updateStyle({
			'--font-family': selectedFont.value,
			'--font-size': selectedFontSize.value,
			'--font-color': selectedFontColor.value,
			'--container-width': selectedContentWidthArr.value,
			'--bg-color': selectedBackgroundColor.value
		});
	}

	const resetHandler = () => {
		setSelectedFont(fontFamilyOptions[0]);
		setSelectedFontSize(fontSizeOptions[0]);
		setSelectedFontColor(fontColors[0]);
		setSelectedBackgroundColor(backgroundColors[0]);
		setSelectedContentWidthArr(contentWidthArr[0]);
		updateStyle({
			'--font-family': defaultArticleState.fontFamilyOption.value,
			'--font-size': defaultArticleState.fontSizeOption.value,
			'--font-color': defaultArticleState.fontColor.value,
			'--container-width': defaultArticleState.contentWidth.value,
			'--bg-color': defaultArticleState.backgroundColor.value,
		});
	};
	return (
		<>
			<ArrowButton onClick={toggleIsOpen} isOpen={isOpen} />
			<aside
				className={`${styles.container} ${ isOpen && styles.container_open}`}>
				<form className={styles.form} onSubmit={submitHanlder} onReset={resetHandler}>
					<Select
						title="Шрифт"
						selected={selectedFont} 
					 	options={fontFamilyOptions}
						onChange={onFontChange}
					/>
					<Spacing size={50}/>
					<RadioGroup
						name="font-size" 
						title='Размер шрифта'	
						options={fontSizeOptions} 
						selected={selectedFontSize}
						onChange={onFontSizeChange}
					/>
					<Spacing size={50}/>
					<Select
						title="Цвет шрифта"
						selected={selectedFontColor} 
					 	options={fontColors}
						onChange={onFontColorChange}
					/>
					<Spacing size={50} />
					<Spacing size={50} />
					<Select
						title="Цвет фона"
						selected={selectedBackgroundColor} 
					 	options={backgroundColors}
						onChange={onBackgroundColorChange}
					/>
					<Spacing size={50} />
					<Select
						title="Цвет контента"
						selected={selectedContentWidthArr} 
					 	options={contentWidthArr}
						onChange={onContentWidthArrChange}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit'/>
					</div>
				</form>
			</aside>
		</>
	);
};
