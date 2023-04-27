import styled from 'styled-components';

const SectionWrapper = styled.div`
  position: relative;
  padding-top: ${(props: any) => (props.sectionIndex === 0 ? '0px' : '37px')};
  @media (max-width: 320px) {
    padding-top: 0px;
  }
`;

const SectionLayout = styled.div`
  background: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  padding: 56px 0;
  display: flex;
  flex-direction: ${(props: any) =>
    props.sectionIndex % 2 == 0 ? 'row' : 'row-reverse'};
  .col-right,
  .col-left {
    flex: 1;
  }
  ${(props: any) =>
    props.sectionIndex % 2 == 0
      ? 'padding-right:  195px'
      : 'padding-left:  322px'};
  @media (max-width: 768px) {
    .col-left {
      flex: 2;
    }
    .col-right {
      flex: 3;
    }
    padding: 30px 0;
    ${(props: any) =>
      props.sectionIndex % 2 == 0
        ? 'padding-right:  20px'
        : 'padding-left:  33px'};
  }
`;

const SectionMobileLayout = styled.div`
  background: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};

  .padding {
    padding: 72px 19px 28px 19px;
  }

  .slick-dots {
    position: absolute;
    bottom: 10px;
  }
`;

const ImagePosition = styled.div`
  position: absolute;
  ${(props: any) =>
    props.sectionIndex % 2 == 0 ? 'left:  175px' : 'right:  125px'};
  top: ${(props: any) => (props.sectionIndex % 2 == 0 ? '35px' : '0px')};
  z-index: 99;
  width: ${(props: any) => props.widthImg}px;
  height: ${(props: any) => props.heightImg}px;
  @media (max-width: 768px) {
    top: ${(props: any) => (props.sectionIndex % 2 == 0 ? '60px' : '0px')};
    ${(props: any) =>
      props.sectionIndex % 2 == 0 ? 'left:  -155px' : 'right:  -305px'};

    width: ${(props: any) => props.widthImg - 200}px;
    height: ${(props: any) => props.heightImg - 200}px;
  }
  @media (max-width: 320px) {
    position: relative;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: ${(props: any) => props.widthImg}px;
    height: ${(props: any) => props.heightImg}px;
  }
`;

const TitleHeader = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 105px;
  color: #e7e7e7;
  @media (max-width: 320px) {
    font-size: 50px;
    line-height: 59px;
    margin-left: 19px;
    margin-top: ${(props: any) => (props.sectionIndex == 0 ? '0px' : '19px')};
  }
`;

const SectionLevel = styled.div``;

const TitleLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .number {
    display: flex;
    flex-direction: column;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 1.5px;
      color: ${(props: any) =>
        props.colorNumber ? `${props.colorNumber}` : '#000000'};
    }
    .border-bottom {
      height: 5px;
      background: ${(props: any) =>
        props.colorText ? props.colorText : '#603ebe'};
      border-radius: 2.5px;
    }
  }
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 1.5px;
    color: #c2c2c2;
  }
  @media (max-width: 320px) {
    .number {
      span {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .title {
      font-size: 28px;
      line-height: 33px;
    }
  }
`;

const DescriptionLevel = styled.div`
  margin-top: 31px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${(props: any) => (props.colorText ? props.colorText : '#000000')};
  }
  @media (max-width: 768px) {
    margin-top: 21px;
    span {
      font-size: 18px;
    }
  }
  @media (max-width: 320px) {
    margin-top: 20px;
    span {
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.74px;
    }
  }
`;

export {
  SectionLayout,
  TitleHeader,
  SectionLevel,
  TitleLevel,
  DescriptionLevel,
  ImagePosition,
  SectionWrapper,
  SectionMobileLayout,
};
