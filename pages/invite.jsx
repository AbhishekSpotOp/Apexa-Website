import { useRouter } from 'next/router';

export default async function invite() {
  // function body

  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://dsc.gg/apexa' });
  res.end();

  return {
    props: {},
  };
}
