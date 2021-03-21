<div class="row">
  <div class="col s10 m5">
    <div class="card">
      <div class="card-image">
        <img
          src={`http://localhost:8000/images/get/${data.image}`}
          alt="Italian Trulli"
        />
        <span class="card-title">{title}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red">
          <i class="material-icons">remove_red_eye</i>
        </a>
      </div>
      <div class="card-content">
        <p>Donor: {name}</p>
        <p>{desc}</p>
        <p>
          {" "}
          Restrictions:{" "}
          <ul
            style={{
              width: "100%",
              columnCount: 3,
              columnGap: 25,
            }}
          >
            {restrictions.map((restriction) => {
              return <p class="tag">{restriction.label}</p>;
            })}
          </ul>
        </p>
        <div style={{ marginLeft: "2%", borderRadius: "10px" }}>
          {generateMap()}
        </div>
      </div>
    </div>
  </div>
</div>;
