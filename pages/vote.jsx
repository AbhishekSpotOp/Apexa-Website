import { useRouter } from 'next/router';

export default function vote() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://top.gg/bot/1003647025096691813/vote' });
  res.end();

  return {
    props: {},
  };
}
