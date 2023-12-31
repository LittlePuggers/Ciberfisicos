export const handlePlantAnimation = (e, rootBone) => {
  rootBone.current.children[1].position.z = -4.65 - 4.85 * e.target.value;
  rootBone.current.children[1].children[0].position.z = -4.8 * e.target.value;
  rootBone.current.children[0].rotation.x = -120 * e.target.value;

  // eslint-disable-next-line no-undef
  console.log(rootBone.current);
};
export const handlePlantAnimationValue = (e, rootBone) => {
  rootBone.current.children[1].position.z = -4.65 - 4.85 * e;
  rootBone.current.children[1].children[0].position.z = -4.8 * e;
  rootBone.current.children[0].rotation.x = -120 * e;

  // eslint-disable-next-line no-undef
  console.log(rootBone.current);
};

export const handleCamera = (e, orbitRef) => {
  // eslint-disable-next-line no-undef
  console.log(orbitRef.current.object.position);
};
