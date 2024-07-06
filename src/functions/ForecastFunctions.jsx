const handleBtn = (num, setButtonStyle, selectDate, sliderRef) => {
  const temp = Array(5).fill("");
  temp[num] = "btn-style";
  setButtonStyle(temp);
  selectDate(num);
  sliderRef.current.scrollTo({
    left: num * 150,
    behavior: "smooth",
  });
};

const handleArrow = (amount, ref) => {
  if (ref.current) {
    console.log(ref.current);
    ref.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }
};

const arrowVisibility = (ref, setVisibility) => {
    const displayWidth = ref.current.clientWidth;
    const actualWidth = ref.current.scrollWidth;
    setVisibility(displayWidth < actualWidth);
}

export { handleArrow, handleBtn, arrowVisibility };
