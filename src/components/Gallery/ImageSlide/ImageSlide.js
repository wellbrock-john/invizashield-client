export const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
  };

  return <div className="image-slide" style={styles}></div>;
};
