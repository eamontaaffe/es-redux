# Event-sourcing Redux

Recently, I have been learning about event sourcing as a data structure. Also,
I have been using Redux, or Redux derivatives like Apollo quite extensively. As
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

## Three principles

Redux has a series of principles used to define the development. However with a
pure event-sourcing twist, they come out looking a bit different.

### Events logs are the source of truth

The only thing that we should be using to make calculations is the event logs.
According to Martin Fowler, we should be able to blow away the application state
and rebuild-from the event logs.

### Logs are immutable and append-only

Redux understands that the state is read only, however it is able to be mutated
using reduces. This results in a loss of data over time.

### Views are pure functions

Materialized views are pure functions with only the event logs as inputs.

## It should...

- [ ]  Be able to be used with `react-redux` to save a bunch of time writing
the plumbing code again.


## Opinions

### Lazy views
Materialized views should be initialized in a lazy fashion and only updated when
required from the most recent snapshot.

Materialized views are streams, they can open the stream to retrieve an
onslaught of logs that have built up waiting for processing. When they have
cleared out the backlog, they can await any new events.

## Links

- [Martin Fowler's event sourcing](https://martinfowler.com/eaaDev/
EventSourcing.html)
