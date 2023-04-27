import React from 'react';
import {
  SectionLayout,
  TitleHeader,
  SectionLevel,
  TitleLevel,
  DescriptionLevel,
  ImagePosition,
  SectionWrapper,
} from './style';
import Image from 'next/image';

interface ISectionComponent {
  data: any;
}

const SectionComponent: React.FC<ISectionComponent> = ({ data }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <SectionWrapper key={index} sectionIndex={index}>
          <SectionLayout key={'title' + index} sectionIndex={index}>
            <div className="col-left" />
            <div className="col-right">
              <TitleHeader>{item.topic}</TitleHeader>
            </div>
          </SectionLayout>
          <ImagePosition
            sectionIndex={index}
            widthImg={item.image.desktop.width}
            heightImg={item.image.desktop.height}
          >
            <Image
              src={item.image.url}
              alt={`image_section_${index}`}
              // width={item.image.width}
              // height={item.image.height}
              fill
              style={{ objectFit: 'contain' }}
            />
          </ImagePosition>
          {item.section &&
            item.section.map((sectionItem: any, sectionIndex: number) => (
              <SectionLayout
                key={'section' + sectionIndex}
                backgroundColor={sectionItem?.setting?.backgroundColor}
                sectionIndex={index}
              >
                <div className="col-left" />
                <div className="col-right">
                  <SectionLevel>
                    <TitleLevel
                      colorText={sectionItem?.setting?.color}
                      colorNumber={sectionItem?.setting?.color_number}
                    >
                      <div className="number">
                        <span>0{sectionIndex + 1}</span>
                        <div className="border-bottom" />
                      </div>
                      <div className="title">{sectionItem.title}</div>
                    </TitleLevel>
                    <DescriptionLevel colorText={sectionItem?.setting?.color}>
                      <span>{sectionItem.description}</span>
                    </DescriptionLevel>
                  </SectionLevel>
                </div>
              </SectionLayout>
            ))}
        </SectionWrapper>
      ))}
    </>
  );
};

export default SectionComponent;
