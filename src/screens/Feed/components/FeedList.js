import React from "react";
import { FlatList, RefreshControl } from "react-native";

import FeedItem from "./FeedItem";

export default ({ loading, feed, feed_data, feedUpdate, selectItem }) => (
  <FlatList
    data={feed_data}
    keyExtractor={item => item.data.id}
    renderItem={({ item }) => <FeedItem item={item} selectItem={selectItem} />}
    refreshing={loading}
    refreshControl={
      <RefreshControl refreshing={loading} onRefresh={feedUpdate} />
    }
  />
);