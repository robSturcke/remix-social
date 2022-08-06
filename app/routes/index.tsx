import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { Post } from '~/services/posts.server';
import { getPosts } from '~/services/posts.server';
import { Post as PostBlob } from '~/components/Post';

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline text-red-500">
        Welcome to Remix Social
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostBlob header={post.title}>{post.body}</PostBlob>
          </li>
        ))}
      </ul>
    </div>
  );
}
