import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

function handleSubmit() {
  // do stuff like fetch
  // need a way to link to the results page and also pass the inputs over
}

export default function Home() {
  const [employer, setEmployer] = useState("");
  const [hasGottenResults, setHasGottenResults] = useState(false);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <div className="flex">
          <h1>H1B Data Salary Search</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset className="flex three">
                <label>
                  <input type="text" placeholder="Employer" />
                </label>
                <label>
                  <input type="text" placeholder="Job Title" />
                </label>
                <label>
                  <input type="text" placeholder="City" />
                </label>
              </fieldset>
              <button>Search</button>
            </form>
          </div>
          {/* TODO: Get available years from the database? */}
          {/* <select>
            <option>2022</option>
            <option>2021</option>
          </select> */}
        </div>
      </section>
    </Layout>
  );
}
