import signalResponse from '../services/fetchData';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test the service function', () => {
    it('Should return the object from the API', async () => {
        return await signalResponse().then(data =>{
            expect(data).toBeDefined()
        })
    });
});


