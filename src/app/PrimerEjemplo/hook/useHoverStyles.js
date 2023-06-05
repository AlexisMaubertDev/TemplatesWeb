const useHoverStyle = () => {
  //Poner todo el código css como un String
  //para las pseudoclases ( after, hover, firstchild) se utiliza el simbolo "&"
  //seguido de la pseudoclase como lo harías normalmente en un css
  //con corchetes y todo
  const hoverTransitionUnderLine = `
    cursor: pointer;
    transition: all 2s ease;
    &::after {
      content: "";
      width: 0px;
      height: 2px;
      display: block;
      background: black;
      transition: 300ms;
    }
    &:hover::after {
      width: 100%;
    }
  `;
  return { hoverTransitionUnderLine };
};

export default useHoverStyle;
