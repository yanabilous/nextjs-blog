import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
import {Fragment} from "react";
import Head from "next/head";


function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A list of all programming-related tutorial and posts"/>
      </Head>
      <AllPosts posts={props.posts}/>
    </Fragment>);

}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
}

export default AllPostsPage;