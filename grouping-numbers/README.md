# Tiago Challange

In this challange is given a flat array of telephone numbers, and they should be coverted into a list of telephone objects array, having in each array two phone numbers.

*This:*

```[11111,22222,33333,44444]```

*Into* 


```
[
  { 
    telefones: [
        {
           numero: '11111'
        },
        {
           numero: '22222'
        }
      ]
   },

   { 
    telefones: [
        {
           numero: '33333'
        },
        {
           numero: '44444'
        }
      ]
   }
]

```

##JS PERF
https://jsperf.com/array-to-phone-objects-with-reduce-concat
