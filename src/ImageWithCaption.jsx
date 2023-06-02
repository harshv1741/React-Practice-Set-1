/* eslint-disable react/prop-types */
function ImageWithCaption({ image, caption }) {
  return (
    <div>
      <img src={image} alt={caption} />
    </div>
  );
}

export default ImageWithCaption;
