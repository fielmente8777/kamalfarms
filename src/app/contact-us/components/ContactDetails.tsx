import { SectionWithContainer } from "@/components";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";

interface ContactDetailsProps {
  addresses: {
    id: number;
    src: string;
    address: string;
  }[];
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ addresses }) => {
  return (
    <SectionWithContainer>
      <div className="lg:grid grid-cols-2 gap-10 flex flex-col-reverse">
        {addresses.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <p className="text-textdark"><b>Address: </b> {item.address} </p>
            <div className="w-full aspect-[4/3]">
              <LazyLoadedMap src={item.src} key={item.id} />
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ContactDetails;
