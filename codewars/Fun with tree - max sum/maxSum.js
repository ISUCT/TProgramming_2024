class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function maxSum(root) {
  if (root === null) {
    return 0; // Если дерево пустое, возвращаем 0
  }

  // Внутренняя рекурсивная функция для нахождения максимальной суммы пути
  function dfs(node) {
    if (node === null) {
      return Number.NEGATIVE_INFINITY; // Возвращаем отрицательную бесконечность для нетрадиционного случая
    }

    // Если узел является листом, возвращаем его значение
    if (node.left === null && node.right === null) {
      return node.value;
    }

    // Рекурсивный вызов для левого и правого поддеревьев
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);

    // Возвращаем максимальную сумму пути от корня до листа
    return node.value + Math.max(leftSum, rightSum);
  }

  return dfs(root);
}

console.log(
  maxSum(
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(-80), new TreeNode(-60)),
      new TreeNode(10, new TreeNode(-90))
    )
  )
);
