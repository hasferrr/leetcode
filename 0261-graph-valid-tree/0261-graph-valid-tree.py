class UnionFind:
  def __init__(self, n: int):
    self.disjoint = n
    self.parent = {}
    self.rank = {}
    for i in range(0, n):
      self.parent[i] = i
      self.rank[i] = 0

  def find(self, n: int) -> int:
    p = self.parent[n]
    if p == n:
      return p
    root = self.find(p)
    self.parent[n] = root
    return root

  def union(self, n1: int, n2: int) -> bool:
    p1 = self.find(n1)
    p2 = self.find(n2)
    if p1 == p2:
      return False

    rank1 = self.rank[p1]
    rank2 = self.rank[p2]
    if rank1 > rank2:
      self.parent[p2] = p1
    elif rank1 < rank2:
      self.parent[p1] = p2
    else:
      self.parent[p2] = p1
      self.rank[p1] += 1

    self.disjoint -= 1
    return True

class Solution:
  def validTree(self, n: int, edges: List[List[int]]) -> bool:
    uf = UnionFind(n)
    for src, dst in edges:
      if uf.union(src, dst) == False:
        return False
    return uf.disjoint == 1
