import { useModule } from '../utils/useModule';
import { repositories } from '../repositories';
import { ModuleData } from '../interfaces/module-data';
import ModuleList from './ModuleList';

function ModuleContainer() {
  const data: ModuleData[] = [];

  repositories.map(r => {
    data.push(useModule(r));
  });

  const sortedData = data.sort(
    (a, b) => b.module.stars_count - a.module.stars_count
  );

  return <ModuleList data={sortedData} />;
}

export default ModuleContainer;
