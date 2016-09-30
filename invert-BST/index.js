const invert = node => {
  if (node === null) {
    return;
  }

  const tmp = node.left;
  node.left = node.right;
  node.right = tmp;

  invert(node.left);
  invert(node.right);
};