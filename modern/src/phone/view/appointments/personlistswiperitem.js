Ext.define('{appName}.view.appointments.ListSwiperItem', {
	extend: 'Ext.dataview.listswiper.Stepper',
	xtype: 'personlistswiperitem', 
	tpl: [ `
		<div class="x-text">
			<tpl if="text">
				<span class="label">{text}</span>
			</tpl>
			<tpl if="subject">
				<span class="subject">{[values[values.subject]]}</span>
			</tpl>
		</div>
	`]
});