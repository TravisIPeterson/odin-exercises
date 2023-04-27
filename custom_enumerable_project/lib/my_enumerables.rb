module Enumerable
  
  def my_each_with_index
    i = 0
    while i < self.length
      yield [self[i], i]
      i +=1
    end
    self
  end

  def my_select
    result = Array.new
    my_each do |element|
      result << element if yield(element)
    end
    result
  end

  def my_all?
    result = true
    my_each do |element|
      unless yield(element)
        result = false
      end
    end
    result
  end

  def my_any?
    result = false
    my_each do |element|
      if yield(element)
        result = true
      end
    end
    result
  end

  def my_none?
    !my_any? { |element| yield(element )}
  end

  def my_count
    i = 0
    my_each do |element|
      if block_given?
        if yield(element)
          i += 1
        end
      else
        i += 1
      end
    end
    i
  end

  def my_map
    result = Array.new
    my_each do |element|
      result << yield(element)
    end
    result
  end

  def my_inject(initial_value = nil)
    result = initial_value ? initial_value : first
    my_each_with_index do |element, index|
      next if index == 0 && !initial_value
      result = yield(result, element)
    end
    result
  end

  
end

# You will first have to define my_each
# on the Array class. Methods defined in
# your enumerable module will have access
# to this method
class Array
  
  def my_each
    i = 0
    while i < self.length
      yield(self[i])
      i +=1 
    end
    self
  end

end
