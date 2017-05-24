# Event-sourcing Redux

Recently, I have been learning about event sourcing as a data structure. Also,
I have been using Redux, or redux derivatives like Apollo quite extensively. As
an exercise in understanding I have decided to re-write Redux as if it were an
event-sourcing data structure.

## Background

Redux is base around a simple data flow. An event is dispatched, which is
recieved by a resover which in-turn modifies the centralised data store. Put
simply, it looks somthing like this:

```
Action -> Resolver -> Store -> UI
```

The UI components of the application read from the store to display the data
to the user.

However if this application was based around an event sourcing structure, the
events themselves would be saved in the store and the UI would interact with
some materialised view of those events. It would look like this:

```
Action -> Store -> Resolver -> Materialised View -> UI
```

In contrast from the Redux model, the Store and Resolver steps are swapped in
order and we have this new Materialised View component which I will explain
below.
