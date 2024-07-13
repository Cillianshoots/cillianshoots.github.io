import GalleryImage from "../GalleryImage/GalleryImage";
import "./Gallery.css";

const NUM_COLUMNS = 4;

function Gallery({ images }) {
  const numberOfImages = images.length;
  const imagesPerColumn = Math.ceil(numberOfImages / NUM_COLUMNS);
  function generateColumns() {
    const columns = [];
    let imageIndex = 0;

    for (let i = 0; i < NUM_COLUMNS; i++) {
      const galleryImages = [];
      for (
        let j = 0;
        j < imagesPerColumn && imageIndex + j < numberOfImages;
        j++
      ) {
        galleryImages.push(
          <GalleryImage
            key={`gallery-image-${imageIndex}`}
            src={images[imageIndex]}
          />
        );
        imageIndex++;
      }

      columns.push(
        <div className="gallery-column" key={`column-${i}`}>
          {galleryImages}
        </div>
      );
    }

    return columns;
  }

  return <div className="gallery-row">{generateColumns()}</div>;
}

export default Gallery;
