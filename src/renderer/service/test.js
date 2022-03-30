import Service from './index';
class Test extends Service {
  getAbc(url) {
    return this.get(url);
  }
}
export default new Test();