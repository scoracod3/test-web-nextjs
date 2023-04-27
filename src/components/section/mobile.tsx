import React from 'react';
import {
  TitleHeader,
  SectionLevel,
  TitleLevel,
  DescriptionLevel,
  ImagePosition,
  SectionWrapper,
  SectionMobileLayout,
} from './style';
import Image from 'next/image';
import Slider from 'react-slick';

interface ISectionMobileComponent {
  data: any;
}

const SectionMobileComponent: React.FC<ISectionMobileComponent> = ({
  data,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SectionWrapper>
      {data.map((item: any, index: number) => (
        <SectionMobileLayout key={index}>
          <TitleHeader sectionIndex={index}>{item.topic}</TitleHeader>
          <ImagePosition
            sectionIndex={index}
            widthImg={item.image.mobile.width}
            heightImg={item.image.mobile.height}
          >
            <Image
              src={item.image.url}
              alt={`image_section_${index}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </ImagePosition>
          <Slider {...settings}>
            {item.section &&
              item.section.map((sectionItem: any, sectionIndex: number) => (
                <SectionMobileLayout
                  key={'section' + sectionIndex}
                  backgroundColor={sectionItem?.setting?.backgroundColor}
                  sectionIndex={index}
                >
                  <div className="padding">
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
                </SectionMobileLayout>
              ))}
          </Slider>
        </SectionMobileLayout>
      ))}
    </SectionWrapper>
  );
};

export default SectionMobileComponent;
