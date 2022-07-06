import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import ImageUploading from "react-images-uploading";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"];
  const option = ["M1", "M2", "M3", "M4", "M5", "M6"];
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setImages(imageList);
  };

  const uploadimages = () => {
    // for(var a = 0; a<images.length; a++)
    // {
    const fd = new FormData();
    console.log("heyyy");
    console.log(images[0], "heyyy");
    // fd.append('property-image', images[0]['file']);

    //Post Request to Nodejs API Route
    // axios.post(`https://tawi-backend.herokuapp.com/api/users/property-upload/${propertyId}`, fd,{
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //       },
    // }
    // ).then(res=>
    // {
    //   setSuccessLoading(true)
    //   console.log('ok',images.length)
    //   Swal.fire({
    //     title: 'Images hava been uploaded successfully.',
    //     text: `thanks `,
    //     type: 'success',
    //   });

    // }).catch(err=>{
    //     console.log(err)
    // });
    // }
  };
  return (
    <div className="ota-mng">
      <Navbar />
      <div className="title">OTA Management page</div>
      <Container className="box">
        <div className="dropdown">
          <div className="heading">Device</div>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="fa fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              <div className="options">
                {options.map((option) => (
                  <div
                    onClick={(e) => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="options" style={{ marginTop: "20px" }}>
                {option.map((opt) => (
                  <div
                    onClick={(e) => {
                      setSelected(opt);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="dropdown">
          <div className="heading">Version</div>
          <div className="dropdown-btn">
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="dropdown">
          <div className="heading" style={{ alignSelf: "start" }}>
            file upload
          </div>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            // maxNumber={maxNumber - property.images.length}

            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (

              <Row className="upload__image-wrapper">
                <div className="mainbtndiv">
                  <button
                    className="btn btn-primary"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>

                  {/* <button className="btn btn-danger" onClick={onImageRemoveAll}>Remove all images</button> */}
                </div>

                {imageList.map((image, index) => (
                  <Col md={6} key={index} className="image-item mt-5 mb-5 mr-5">
                    <img src={image["data_url"]} />
                    <div className="image-item__btn-wrapper">
                      <button
                        className="btn btn-primary"
                        style={{ background: "grey", border: "1px grey" }}
                        onClick={() => onImageUpdate(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </ImageUploading>
        </div>

        <Row></Row>
      </Container>

      <div className="button">
        <button onClick={() => uploadimages()}>push update</button>
      </div>
    </div>
  );
}

export default Dropdown;
