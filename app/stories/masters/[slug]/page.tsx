
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import MasterDetail from './MasterDetail';

export async function generateStaticParams() {
  return [
    { slug: 'zhang-meihua' },
    { slug: 'li-yanqing' },
    { slug: 'wang-defu' },
  ];
}

export default function MasterPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MasterDetail masterSlug={params.slug} />
      </main>
      <Footer />
    </div>
  );
}
