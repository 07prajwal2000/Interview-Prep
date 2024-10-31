def findCeil(root, x):
    # Write your code here.
    ceil = -1
    while root:
        if root.data == x:
            return root.data
        elif root.data > x:
            ceil = root.data
            root = root.left
        else:
            root = root.right

    return ceil
