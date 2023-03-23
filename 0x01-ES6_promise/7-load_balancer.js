export default function loadBalancer(chinaDownLoad, USDownLoad) {
  return Promise.race([chinaDownLoad, USDownLoad]);
}
