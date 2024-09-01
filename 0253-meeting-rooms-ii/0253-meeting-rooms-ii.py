"""
Definition of Interval:
class Interval(object):
  def __init__(self, start, end):
    self.start = start
    self.end = end
"""

class Solution:
  def minMeetingRooms(self, intervals: List[Interval]) -> int:
    intervals.sort(key=lambda interval: (interval.start, interval.end))
    min_heap = []
    for i in range(0, len(intervals)):
      if not min_heap or intervals[i].start < min_heap[0]:
        heapq.heappush(min_heap, intervals[i].end)
      else:
        heapq.heappop(min_heap)
        heapq.heappush(min_heap, intervals[i].end)
    return len(min_heap)
