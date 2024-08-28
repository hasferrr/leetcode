"""
Definition of Interval:
class Interval(object):
  def __init__(self, start, end):
    self.start = start
    self.end = end
"""

class Solution:
  def canAttendMeetings(self, intervals: List[Interval]) -> bool:
    intervals.sort(key=lambda node: (node.start, node.end))
    prev = Interval(0, -float("inf"))
    for curr in intervals:
      if curr.start < prev.end:
        return False
      prev = curr
    return True
