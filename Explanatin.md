# LeetCode 931. Minimum Falling Path Sum

**JavaScript / TypeScript**

## Logic

#

We're going from top to bottom always changing current cell value.

2 1 3  
**_6_** 5 4  
7 8 9

For example, we can change 6 to (6 + 2) or (6 + 1), and we choose (6 + 1) = 7. 7 is the minium value of the current cell, there is no another way to get a lesser value.

We do this from top to bottom changing every single cell, in this way we have to change every cell only once and then we can the final answer from bottom row, where all results are calculated.
