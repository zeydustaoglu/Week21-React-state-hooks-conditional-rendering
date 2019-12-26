import React from "react";

const style = {
  width:'18rem',
  margin:'20px'  
}

function Cards(props) {
  return (
    <div className="col-md-4 ">
      <div className="card " style={style}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.content}
          </p>
        </div>
        
        <div className="card-body">       
          <a href={props.href} className="card-link" style={{float:'right'}}>
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <section>
        <div className="row">
          <Cards 
          img ="http://lorempixel.com/g/400/400"
          title="Features"
          content = "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
          href = "https://getbootstrap.com/"
           />

          <Cards 
          img ="http://lorempixel.com/g/400/400"
          title="Resources"
          content = "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
          href = "https://getbootstrap.com/"
          />

          <Cards 
          img ="http://lorempixel.com/g/400/400"
          title="Informing"
          content = "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
          href = "https://getbootstrap.com/"
          />

        </div>
      </section>
    </div>
  );
}

export default Products;
