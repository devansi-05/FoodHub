import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";

const ListingForm = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const [restrictions, setRestrictions] = useState([]);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  async function createListing(data, restrictions) {
    data.location = data.location
      .replace("-", "")
      .replace(" ", "")
      .toUpperCase();
    data.location = await getLocationData(data.location);
    while (uploading) {
      await new Promise((res) => {
        setTimeout(res, 500);
      });
    }
    const res = await axios({
      method: "post",
      url: "http://localhost:8000/listings/add",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      data: { ...data, restrictions: restrictions, name: "test", image: image },
    });

    if (res.data._id) {
      window.location = `/listings?open=${res.data._id}`;
    }
  }

  async function getLocationData(postcode) {
    console.log(postcode);
    const res = await axios({
      method: "post",
      url: "http://localhost:8000/listing/location",
      data: { post_code: postcode },
    });
    if (res.data.status === "OK") {
      return JSON.stringify(res.data.results[0].geometry);
    }
  }

  const onSubmit = async (values) => {
    await createListing(values, JSON.stringify(restrictions));
    setRestrictions([]);
  };

  const options = [
    { value: "veg", label: "Veg" },
    { value: "non-veg", label: "non-veg" },
    { value: "nut", label: "Nut Free" },
    { value: "lactose", label: "Lactose Free" },
  ];

  const handleChange = (e) => {
    setRestrictions(e);
  };

  const handleImage = (e) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios({
      method: "post",
      url: "http://localhost:8000/images/upload",
      validateStatus: null,
      data: formData,
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data.filename);
        setImage(res.data.filename);
        setUploading(false);
      } else {
        console.log(`Upload failed with res status ${res.status}`);
        setUploading(false);
      }
    });
  };

  return (
    <div className="form-group container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-weight-bold" style={{ paddingTop: 10 }}>
            Title
            <input
              type="text"
              name="title"
              ref={register({
                required: "Required",
                maxLength: 60,
              })}
              className="form-control"
            />
          </label>
        </div>

        <div>
          <label className="font-weight-bold">
            Description
            <textarea
              type="text"
              name="description"
              ref={register({
                required: "Required",
                maxLength: 450,
              })}
              className="form-control"
              style={{ height: "160px", width: "100%" }}
            />
          </label>
        </div>

        <div style={{ fontWeight: "bold" }}>
          Postal Code
          <input
            style={{ marginLeft: "1%", marginTop: "2%" }}
            type="text"
            name="location"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
                message: "Invalid Postal Code",
              },
            })}
          />
          {errors.location && <span>{errors.location.message}</span>}
        </div>

        <div>
          <label className="font-weight-bold" style={{ marginTop: "2%" }}>
            Dietary Restrictions
            <CreatableSelect
              isMulti
              closeMenuOnSelect={false}
              onChange={handleChange}
              options={options}
            />
          </label>
        </div>
        <div class="font-weight-bold" style={{ marginTop: "2%" }}>
          Upload Image:
          <input
            style={{ marginLeft: "1%" }}
            type="file"
            name="image"
            onChange={handleImage}
          />
        </div>

        <br />
        <button
          style={{ marginTop: "2%" }}
          type="submit"
          className="btn btn-dark"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default ListingForm;
