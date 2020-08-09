import { ModuleData } from '../interfaces/module-data';
import ModuleItem from './ModuleItem';

function ModuleList(props: { data: ModuleData[] }) {
  return (
    <div className='flex flex-col justify-center md:flex-row mt-6 flex-wrap flex-shrink-0'>
      {props.data.map((d, index) => (
        <ModuleItem key={index} {...d} />
      ))}
    </div>
  );
}

export default ModuleList;
