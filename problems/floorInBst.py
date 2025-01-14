def floorInBST(root, x):
    floor = -1
    while root:
        if root.data == x:
            return root.data
        elif root.data > x:
            root = root.left
        else:
            floor = root.data
            root = root.right

    return floor
