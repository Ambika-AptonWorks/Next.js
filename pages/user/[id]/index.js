import React from "react";
import Content from "../../../components/termsConditions/content";
import HomeStyles from "../../../styles/Home.module.css";

const index = ({ data }) => {
  return (
    <div className={HomeStyles.container} 
    style={{"marginLeft":"300px","overflow-y":"hidden"}} >
      {data && (
        <main >
          <div className={HomeStyles.grid}>
            <div className={HomeStyles.card} >
              <p>Name:{data.name}</p>
              <p>Email:{data.email}</p>
              <p>Address:{data.address.street},
              City:{data.address.city},
              Zipcode:{data.address.zipcode}</p>
              <p>Phone:{data.phone}</p>
              <p>Company:{data.company.name}</p>
              <p>Website:{data.website}</p>
            </div>
          </div>
        </main>
      )}
      <Content/>
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await res.json();
  return { props: { data } };
}
export async function getStaticPaths() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/`
  );
  const users = await res.json();
  const paths= users.map(user =>({params:
  {id: user.id.toString() } } ))
  return {
    paths:paths,
    fallback: false
  };
}
