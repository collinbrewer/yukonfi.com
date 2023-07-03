import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  Head,
  Image,
  Link,
};

const CustomMDXRemote = (props: MDXRemoteSerializeResult) => {
  return (
    <MDXRemote
      {...props}
      components={components}
    />
  );
};

export default CustomMDXRemote;
