import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function BreadcrumbLink({ to, children }) {
  return (
    <AniLink paintDrip to={to} className="hover:text-blue-500">
      {children}
    </AniLink>
  );
}

export default function Breadcrumb() {
  const paths = window.location.pathname.replaceAll("/", " ").trim().split(" ");
  return (
    <div className="mx-auto max-w-screen-md text-gray-500 my-6 text-sm px-5">
      <BreadcrumbLink to="/">Nurhuda Joantama</BreadcrumbLink>
      {paths.map((path, index) => {
        if (index === 0) {
          return (
            <React.Fragment key={index}>
              {" "}
              / <BreadcrumbLink to={"/" + path}>{path}</BreadcrumbLink>
            </React.Fragment>
          );
        } else {
          let result = "";
          for (let index1 = 0; index1 <= index; index1++) {
            result += "/" + paths[index1];
          }
          return (
            <React.Fragment key={index}>
              {" "}
              / <BreadcrumbLink to={result}>{path}</BreadcrumbLink>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
}